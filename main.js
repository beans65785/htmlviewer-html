const htmlInput = document.getElementById('htmlInput');
const previewOutput = document.getElementById('previewOutput');
const charCount = document.getElementById('charCount');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

// The specific video file URL
const mov_kfp = "https://beans65785.github.io/videos/mov_kfp.mp4";

// Initial content for the editor
const initialContent = `<h3>Video Preview</h3>

<video width="320" controls autoplay loop>
    <source src="mov_kfp.mp4" type="video/mp4">
</video>

<p>The video is set to autoplay and loop with sound on.</p>`;

// Function to update the preview
function updatePreview() {
    let content = htmlInput.value;
    
    // Replaces "mov_kfp.mp4" with the real variable value for the preview
    const processedContent = content.split('mov_kfp.mp4').join(mov_kfp);
    
    previewOutput.innerHTML = processedContent;
    charCount.textContent = content.length;
}

// Initialize with content on load
window.onload = () => {
    htmlInput.value = initialContent;
    updatePreview();
};

// Event listeners
htmlInput.addEventListener('input', updatePreview);

clearBtn.addEventListener('click', () => {
    htmlInput.value = '';
    updatePreview();
});

copyBtn.addEventListener('click', () => {
    const textToCopy = htmlInput.value;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Unable to copy', err);
    }
    document.body.removeChild(textArea);
});