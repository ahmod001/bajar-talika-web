// hooks/useDownload.ts

import axios, { AxiosError } from "axios";
import { useState, useTransition } from "react";
import useFileDownload from './useFileDownload'; // Import the new hook

const useDownload = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<any>(); 
    const { downloadFile } = useFileDownload();

    const downloadApk = async () => { 
        try {
            const res = await axios.get('/api/download-app', {
                responseType: 'blob', 
            });

            const contentDisposition = res.headers['content-disposition'];
            let fileName = 'app.apk'; 

            if (contentDisposition) {
                const match = contentDisposition.match(/filename="([^"]+)"/);
                if (match && match[1]) {
                    fileName = match[1];
                }
            }

            const contentType = res.headers['content-type'] || 'application/vnd.android.package-archive';

            downloadFile(res.data, fileName, contentType);

            setError(null); 

        } catch (error) {
            console.error("APK Download error:", error);
            setError((error as AxiosError).response || error); 
        }
    };

    return {
        isPending,
        error,
        download: () => startTransition(downloadApk), 
    };
};

export default useDownload;