import React from 'react';
import {Article} from './Article';

export const Content = () => {
    return(
        <main>
            <section className="posts">
                <div className="container">
                    <h1>
                        Posts
                    </h1>
                    <Article />
                </div>
            </section>

        </main>
    );
}