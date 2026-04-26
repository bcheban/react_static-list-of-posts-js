import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) =>
  !comments.length ? (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ) : (
    <div className="CommentList">
      {comments.map((comment, index) => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
          {index < comments.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );