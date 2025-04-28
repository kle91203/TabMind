import { useEffect, useRef } from "react";


export default function Dropzone() {
    const dropzoneRef = useRef(null); // Create a reference to the element


  useEffect(() => {
    let dropzoneElem = null;

    const handleDrop = (e) => {
        e.preventDefault();
        const url = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('text');
        if (url && url.startsWith('http')) {
            console.log('Dropped URL:', url);
            // You could now create a new node and add it to your mind map
        } else {
            console.log('Drop was not a link');
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const dropzoneElement = dropzoneRef.current;
    if (dropzoneElement) {
      dropzoneElement.addEventListener('drop', handleDrop);
      dropzoneElement.addEventListener('dragover', handleDragOver);
    }

    return () => {
        if (dropzoneElem) {
            dropzoneElem.removeEventListener('drop', handleDrop);
            dropzoneElem.removeEventListener('dragover', handleDragOve);
        }
    };
  }, []); // Empty dependency array ensures it runs only on mount and unmount


    return <div 
        ref={dropzoneRef} 
        //id="dropzone" 
        className='dropzone'
        >Drop a link here</div>
}
