import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import "./UploadImage.css"


function UploadImage() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      isDragging,
                      dragProps
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button className="button-88"
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Add image
                        </button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button className="button-88" onClick={() => onImageUpdate(index)}>Update</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UploadImage />, rootElement);

export default UploadImage;
