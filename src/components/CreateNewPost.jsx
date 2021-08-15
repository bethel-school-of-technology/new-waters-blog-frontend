import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

// class Dropzone extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       files: [],
//     };
//   }
//   handleChange(files) {
//     this.setState({
//       files: files,
//     });
//     {
//       /* SUCCESSFULLY STORING IMAGE IN CONSOLE/TERMINAL */
//     }
//     console.log(files);
//   }

//   render() {
//     return (
//       <>
//         <DropzoneArea
//           acceptedFiles={["image/*"]}
//           dropzoneText={"Drag image here or click"}
//           onChange={this.handleChange.bind(this)}
//         />
//       </>
//     );
//   }
// }

const CreateNewPost = (props) => {
  return (
    <>
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        {/* <Dropzone /> */}
        <textarea
          onChange={props.savePostContentToState}
          placeholder="contents"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <textarea
          onChange={props.savePostContent1ToState}
          placeholder="contents"
          rows="8"
          cols="41"
          required
          ref={props.getContent1}
        ></textarea>
        <textarea
          onChange={props.savePostContent2ToState}
          placeholder="contents"
          rows="8"
          cols="41"
          required
          ref={props.getContent2}
        ></textarea>
        <button>Save Post</button>
      </form>
    </>
  );
};
export default CreateNewPost;
