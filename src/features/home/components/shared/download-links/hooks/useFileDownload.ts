// hooks/useFileDownload.ts

import { useCallback } from 'react';

/**
 * A React hook for programmatically triggering file downloads from client-side data (Blob or ArrayBuffer).
 * Handles creating and revoking Blob URLs.
 *
 * @returns A function `downloadFile` that takes a Blob/ArrayBuffer and a filename to trigger download.
 */
const useFileDownload = () => {
  const downloadFile = useCallback(
    (fileData: Blob | ArrayBuffer, fileName: string, contentType: string = 'application/octet-stream') => {
      let blob: Blob;

      // Ensure fileData is a Blob
      if (!(fileData instanceof Blob)) {
        blob = new Blob([fileData], { type: contentType });
      } else {
        blob = fileData;
      }

      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName; // Set the download attribute to the desired filename
      document.body.appendChild(a); // Append to body to make it clickable

      // Programmatically click the anchor element to trigger the download
      a.click();

      // Clean up: remove the anchor and revoke the object URL
      a.remove();
      window.URL.revokeObjectURL(url); // IMPORTANT: Release the object URL memory
    },
    [] // No dependencies, as it only uses built-in browser APIs
  );

  return { downloadFile };
};

export default useFileDownload;