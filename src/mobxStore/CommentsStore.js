import {observable, action} from "mobx";
import {v4} from "uuid";

export const commentsStore = observable({
  comments: [],
  addComment(formData, commentId) {
    const {name, email, textComment} = formData;

    const newComment = {
      id: v4(),
      avatarUrl: '/images/avatar.jpg',
      name,
      commentTime: Date.now(),
      ratingCount: 0,
      email,
      text: textComment,
      rating: 0,
      lvl: 1,
      answersComments: []
    };

    if (!commentId) {
      this.comments.push(newComment);
    } else {
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].id === commentId) {
          this.comments[i].answersComments.push({
            ...newComment,
            lvl: this.comments[i].lvl + 1,
            avatarUrl: '/images/avatar-2.jpg',
          });
        }
        for (let g = 0; g < this.comments[i].answersComments.length; g++) {
          if (this.comments[i].answersComments[g].id === commentId) {
            this.comments[i].answersComments[g].answersComments.push({
              ...newComment,
              lvl: this.comments[i].answersComments[g].lvl + 1,
              avatarUrl: '/images/avatar-3.jpg',
            });
          }
        }
      }
    }
  },

  idsComments: [],
  changeShowReplyForm(idComment, action) {
    if (action === 'add') {
      this.idsComments.push(idComment);
    } else {
      this.idsComments = this.idsComments.filter(item => item !== idComment);
    }
  },
}, {
  addComment: action
});