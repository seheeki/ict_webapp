const captureContainer = document.getElementById("jsCaptureContainer");
const captureBtn = document.getElementById("jsCaptureBtn");
const imagePreview = document.getElementById("jsImagePreview");

const video = document.getElementById("video");
const width = 320;
const height = 160;

let streamObject;
let imageCapture;

const handleImageData = (event) => {
    console.log(event);
    const { data: imageFile } = event;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(imageFile);
    linkdownload = "captured.png";
    document.body.appendChild(link);
    link.click();
};

//getMedia: 화면 보여주고 버튼 클릭 시 클릭만 호환, mediaStream 생성
const getVideo = async () => {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        });
        console.log(stream);

        imagePreview.srcObject = stream;
        imagePreview.play();
        streamObject = stream;
    } catch(error) {
        captureBtn.innerHTML = "Can't Capture";
    }
}

//사진찍기 기능
const takeCapture = () => {
    const track = streamObject.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
    imageCapture.takePhoto()
    .then( blob => {
        console.log(imageCapture);
        console.log(blob);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "captured.png";
        document.body.appendChild(link);
        link.click();
    });
};

const drawCanvas = (canvas, img) => {
    canvas.width = getComputedStyle(canvas).width.split('px')[0];
    canvas.height = getComputedStyle(canvas).height.split('px')[0];
    let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
      x, y, img.width * ratio, img.height * ratio);
};

function init() {
    getVideo();
    captureBtn.addEventListener("click", takeCapture);
}

if (captureContainer) {
    init();
}