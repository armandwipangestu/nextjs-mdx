// app/blog/page.tsx
'use client';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import ExampleContent from '@/content/example.mdx';

const BlogPage: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-4">
      <MarkdownRenderer>
        <ExampleContent />
      </MarkdownRenderer>
    </div>
  );
};

export default BlogPage;
