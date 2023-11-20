import React from 'react';
import MainLayout from '../../components/MainLayout';
import BreadCrumbs from '../../components/BreadCrumbs';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import SuggestedPosts from './container/SuggestedPosts';
import CommentsContainer from '../../components/comments/CommentsContainer';

const breadCrumbsData = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'Блог',
    link: '/blog',
  },
  {
    name: 'Название статьи',
    link: '/blog/1',
  },
];

const postsData = [
  {
    _id: '1',
    image: images.Post1Image,
    title: 'Помоги ребенку получить образование',
    createdAt: '2023-01-28',
  },
  {
    _id: '2',
    image: images.Post1Image,
    title: 'Помоги ребенку получить образование',
    createdAt: '2023-01-28',
  },
  {
    _id: '3',
    image: images.Post1Image,
    title: 'Помоги ребенку получить образование',
    createdAt: '2023-01-28',
  },
  {
    _id: '4',
    image: images.Post1Image,
    title: 'Помоги ребенку получить образование',
    createdAt: '2023-01-28',
  },
];

const tagsData = ['Медицина', 'Жизнь', 'Здоровье', 'Блюда', 'Диета', 'Образование'];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img className="rounded-xl w-full" src={images.Post1Image} alt="картинка" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base">
            ОБРАЗОВАНИЕ
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Помогите ребенку получить образование
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eaque iste repellat
              rerum saepe, natus blanditiis excepturi cupiditate magni quia placeat deleniti, porro
              eligendi neque veniam ab architecto totam quis. Labore voluptates quasi earum sit
              ipsum optio laborum id deleniti commodi ut similique, aliquid ipsa voluptatem debitis
              ex beatae cumque mollitia natus dicta? Mollitia inventore rerum, suscipit quod
              deserunt ipsam? Consequatur, voluptatum? Non possimus rerum, animi incidunt quam earum
              odio tenetur officiis vel alias veniam est nobis eos repellat dolorum excepturi
              similique porro illum nostrum voluptate. Voluptatibus accusamus nostrum maiores.
            </p>
          </div>
          <CommentsContainer className='mt-10' logginedUserId='a' />
        </article>
        <SuggestedPosts
          header="Последнии статьи"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
