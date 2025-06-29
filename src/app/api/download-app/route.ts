import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { info } from '../../../../public/app/app.info';

export const GET = async () => {
    try {

        const fileName = `${info.app_name} ${info.app_version}.apk`;

        const filePath = path.join(process.cwd(), 'public', 'app/app.apk');

        const fileBuffer = await fs.readFile(filePath);

        const headers = new Headers();
        headers.set('Content-Disposition', `attachment; filename="${fileName}"`);
        headers.set('Content-Type', 'application/vnd.android.package-archive');
        headers.set('Content-Length', fileBuffer.length.toString());


        return new NextResponse(fileBuffer, {
            headers: headers,
            status: 200,
        });

    } catch (error) {
        console.error('Error downloading APK:', error);

        return new NextResponse('File not found or an error occurred.', {
            status: 404,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
};

