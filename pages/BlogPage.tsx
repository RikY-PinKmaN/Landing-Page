
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-4">Aether AI Blog</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate dark:text-light-slate">
          Insights on AI, productivity, and the future of small business technology.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.concat(blogPosts).map((post, index) => ( // Dummied up more posts
            <div key={`${post.title}-${index}`} className="bg-slate/5 dark:bg-light-charcoal rounded-lg overflow-hidden border border-slate/10 dark:border-charcoal/50 flex flex-col group">
              <div className="overflow-hidden">
                <img src={`${post.imageUrl}&random=${index}`} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-sm mb-2">
                    <p className="text-aqua font-semibold">{post.category}</p>
                    <p className="text-slate dark:text-light-slate">{post.date}</p>
                </div>
                <h3 className="text-xl font-bold text-charcoal dark:text-lightest-slate mb-3 flex-grow">{post.title}</h3>
                <p className="text-sm mb-4">{post.excerpt}</p>
                <div className="mt-auto">
                    <Link to="#" className="font-bold text-aqua hover:underline">Read More &rarr;</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
