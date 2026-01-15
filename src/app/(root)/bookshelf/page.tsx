import React from "react";
import PageContainer from "@/components/page/page-container";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata: Metadata = constructMetadata({
  keywords: ["Bookshelf", "Books", "Reading"],
});

type Book = {
  title: string;
  author: string;
  cover: string;
  description?: string;
  pdfLink?: string;
};

const books: Book[] = [
  {
    title: "A Mind for Numbers",
    author: "Barbara Oakley",
    cover: "https://covers.openlibrary.org/b/isbn/9780399165245-L.jpg",
    description: "How to Excel at Math and Science (Even If You Flunked Algebra).",
    pdfLink: "/pdfs/A Mind for Numbers PDF.pdf",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    description: "Rules for Focused Success in a Distracted World.",
    pdfLink: "/pdfs/Deep Work.pdf",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    cover: "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg",
    description: "Your journey to mastery.",
    pdfLink: "/pdfs/the-pragmatic-programmer.pdf",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    description: "Timeless lessons on wealth, greed, and happiness.",
    pdfLink: "/pdfs/The Psychology of Money PDF.pdf",
  },
];

const BookshelfPage = () => {
  return (
    <PageContainer>
      <section className="py-8">
        <h1 className="text-4xl font-bold md:text-6xl">Bookshelf</h1>
        <p className="mt-2 text-muted">Books and pieces of wisdom I’ve enjoyed reading</p>

        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {books.map((b) => (
              <article
                key={b.title}
                className="group bg-card/50 rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {b.pdfLink ? (
                  <a
                    href={b.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-[2/3] bg-gray-100 dark:bg-neutral-800">
                      <Image
                        src={b.cover}
                        alt={b.title}
                        width={215}
                        height={330}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    {/* <div className="p-3">
                      <h3 className="text-sm font-medium truncate">{b.title}</h3>
                      <p className="text-xs text-muted mt-1 truncate">{b.author}</p>
                      <span className="text-xs text-blue-500 hover:underline mt-1 block">
                        View PDF
                      </span>
                    </div> */}
                  </a>
                ) : (
                  <>
                    <div className="aspect-[2/3] bg-gray-100 dark:bg-neutral-800">
                      <Image
                        src={b.cover}
                        alt={b.title}
                        width={215}
                        height={330}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    {/* <div className="p-3">
                      <h3 className="text-sm font-medium truncate">{b.title}</h3>
                      <p className="text-xs text-muted mt-1 truncate">{b.author}</p>
                    </div> */}
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default BookshelfPage;
