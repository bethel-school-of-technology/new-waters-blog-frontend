import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

// const TitleRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

const ModifyPost = (props) => {
  return (
    <>
      <form>
        <h1>Edit Post</h1>
        <input
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          type="text"
          placeholder="title"
          size="39"
        />
        <textarea
          defaultValue={props.content}
          placeholder="contents"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <textarea
          defaultValue={props.content1}
          onChange={props.savePostContent1ToState}
          placeholder="contents"
          rows="8"
          cols="41"
          ref={props.getContent1}
        ></textarea>
        <textarea
          defaultValue={props.content2}
          onChange={props.savePostContent2ToState}
          placeholder="contents"
          rows="8"
          cols="41"
          ref={props.getContent2}
        ></textarea>
        <button onClick={props.updatePost}>Update Post</button>
      </form>
    </>
  );
};
export default ModifyPost;

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
