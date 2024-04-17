import React, {useState} from "react";
import "./create.css";

export const Create = () => { // eslint-disable-next-line
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <>
            <section className="newPost">
                <form className="formContainer">
                    <label className="label">Text</label>
                    <textarea rows="15"></textarea>

                    <label className="label">Article Preview</label>
                    <div className="titlePart">
                        <label className="sublabel">Title</label>
                        <input type="text"/>
                        <label className="sublabel">Tags</label>
                        <input type="text"/>
                    </div>

                    <label className="label">Featured Image</label>
                    <div className="imgUpload">
                        <input type="file" id="file" name="file"
                            onChange={handleFileChange}/>
                        <label htmlFor="file">
                            <div>
                                <span className="dropFile">Drop photo here</span>
                                <span className="orText">Or</span>
                                <span className="browseText">Browse</span>
                            </div>
                        </label>
                    </div>
                    <button className="button">Post article</button>
                </form>
            </section>
        </>
    );
};

