import React from "react";
import './Comment.css'

function Comment() {
    return (
        <>
            <section className="comment">
                <p className="title">Titulo</p>
                <p className="text">Texto do Comentário</p>
                <p className="author">Autor: X</p>
            </section>
        </>
    )
}

export default Comment