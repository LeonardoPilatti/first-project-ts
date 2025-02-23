import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import * as S from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
  }
  
  interface Content {
    type: "paragraph" | "link";
    content: string;
  }
  
  export interface PostType {
    author: Author;
    publishedAt: Date;
    content: Content[];
    id: number;
  }
  
  interface PostProps {
    post: PostType;
  }

export const Post = ({post}: PostProps) => {
    const {author, publishedAt, content} = post;

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={S.post}>
            <header>
                <div className={S.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={S.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={S.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    }
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={S.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe um comentário' 
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={S.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    )
}