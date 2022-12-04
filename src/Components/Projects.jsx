import React, { useState } from 'react';

import { VscGithub } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import { TbChevronsLeft } from 'react-icons/tb';
import { TbChevronsRight } from 'react-icons/tb';

let projects = [
  {
    id: 0,
    img: 'dealshare.png',
    title: 'Dealshare Shopping App',
    discription:
      'This is a online shopping app.',
    tags: ['react', 'react-router', 'redux', 'css'],
    repolink: 'https://github.com/pradeepk113/dealshare',
    livelink: 'https://dealshare.vercel.app/',
  },
  {
    id: 1,
    img: 'food_order.png',
    title: 'Food-Order-App',
    discription:
      'This is a Food order app where user can search and ordered food .',
    tags: ['react', 'HTML', 'css', 'JavaScript'],
    repolink: 'https://github.com/pradeepk113/food-order',
    livelink: 'https://foods-ordered.netlify.app/',
  },
  {
    id: 2,
    img: 'git_octo.png',
    title: 'Search Git Profile',
    discription:
      'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/pradeepk113/git-octo-profile',
    livelink: 'https://gh-octo-profile.vercel.app/',
  },
  {
    id: 3,
    img: 'masai_ecommerce.png',
    title: 'Shopping App',
    discription:
      'This is a shoppin app where user can select and buy clothes.',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM',"Local "],
    repolink: 'https://github.com/masai-course/Pradeep_fp04_241/tree/master/unit-2/sprint-4/day-4/assignments',
    livelink: 'https://ecommerse-masia.netlify.app/',
  },
  {
    id: 4,
    img: 'memory_game.png',
    title: 'Memory Game',
    discription:
      'It is a game to test your memorization power with fun. It has different levels of difficulty. Player can save his/her best score.',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/pradeepk113/memory-game',
    livelink: 'https://memory-game-react-app-ashish8796.vercel.app/',
  },
  {
    id: 5,
    img: 'search_movies.png',
    title: 'Movie Search Bar',
    discription:
      'This is a movie Search Bar by using debouncing.User can search and book Movie ',
    tags: ['HTML', 'CSS', 'JavaScript', 'Debouncing','LS'],
    repolink: 'https://github.com/masai-course/Pradeep_fp04_241/tree/master/unit-3/sprint-3/evaluation/movie%20searching',
    livelink: 'https://dazzling-rabanadas-4052dc.netlify.app/',
  },
  {
    id: 6,
    img: 'calculator.png',
    title: 'Online Calculator',
    discription:
      'This is a Simple Online Calculator.',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM'],
    repolink: 'https://github.com/masai-course/Pradeep_fp04_241/blob/master/unit-2/sprint-3/day-2/we/calculator.html',
    livelink: 'https://calculators-online.netlify.app/',
  },
  {
    id: 7,
    img: 'yogaflex.png',
    title: 'YogaLex',
    discription: 'This is responsive and adaptive static website for Yoga.',
    tags: ['html', 'scss', 'css', 'javascript'],
    repolink: 'https://github.com/pradeepk113/yogalex',
    livelink: 'https://dazzling-rabanadas-4052dc.netlify.app/',
  },
  // {
  //   id: 8,
  //   img: 'conduitapi.jpg',
  //   title: 'Conduit API',
  //   discription: 'This is an API for Blog applications like Medium.',
  //   tags: ['node.js', 'express.js', 'mongodb', 'jwt'],
  //   repolink: 'https://github.com/umakant-2113/Conduit-API',
  //   livelink: 'https://github.com/umakant-2113/Conduit-API/blob/main/README.md',
  // },

  // {
  //   id: 9,
  //   img: 'expanseT.png',
  //   title: 'Expense Tracker',
  //   discription: 'This is an SSR Expense management application',
  //   tags: ['express.js', 'mongodb', 'ejs', 'oauth'],
  //   repolink: 'https://github.com/umakant-2113/ExpenseTracker',
  //   livelink: 'https://u-expense-tracker.herokuapp.com',
  // },
  // {
  //   id: 10,
  //   img: 'podcast.png',
  //   title: 'Podcast',
  //   discription:
  //     'This is an SSR Podcast application with different subscriptions.',
  //   tags: ['node.js', 'express.js', 'mongodb', 'ejs'],
  //   repolink: 'https://github.com/umakant-2113/PodCast',
  //   livelink: 'https://u-podcast.herokuapp.com',
  // },

  // {
  //   id: 11,
  //   img: 'yogaflex.png',
  //   title: 'YogaLex',
  //   discription: 'This is responsive and adaptive static website for Yoga.',
  //   tags: ['html', 'scss', 'css', 'javascript'],
  //   repolink: 'https://github.com/umakant-2113/YogaLex',
  //   livelink: 'https://dazzling-rabanadas-4052dc.netlify.app/',
  // },
  // {
  //   id: 12,
  //   img: 'Unitech.jpg',
  //   title: 'UniTech',
  //   discription:
  //     'This is responsive and adaptive static website for Businesses.',
  //   tags: ['html', 'scss', 'css'],
  //   repolink: 'https://github.com/umakant-2113/UniTech',
  //   livelink: 'https://jolly-dodol-cdb907.netlify.app',
  // },
];

function Projects() {
  let num;
  if (window.outerWidth <= 480) {
    num = 1;
  } else if (window.outerWidth > 480 && window.outerWidth <= 768) {
    num = 2;
  } else {
    num = 3;
  }
  const [count, setCount] = useState(0);

  const [frontProjects, setFrontProjects] = useState(() => {
    let arr = [];
    for (let i = count; i < count + num; i++) {
      arr.push(projects[i]);
    }
    console.log(arr);
    return arr;
  });

  function handleLeft() {
    setCount((prevState) => {
      if (count > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });

    setFrontProjects((prevState) => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      return arr;
    });
  }

  function handleRight() {
    setCount((prevState) => {
      if (count < projects.length - num) {
        return prevState + 1;
      } else {
        return projects.length - num;
      }
    });

    setFrontProjects((prevState) => {
      let arr = [];

      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }

      return arr;
    });
  }

  return (
    <>
      <section className='projects' id='projects'>
        <h2>Projects</h2>
        <div className='project-box mn-sm-center '>
          {frontProjects.map((item, index) => {
            return (
              <div
                className='flex-30 project-item sm-flex-45 mn-sm-bet'
                key={index}
              >
                <div>
                  <figure className='figure'>
                    <img
                      className='full-width'
                      src={`./assets/projects/${item.img}`}
                      alt=''
                    />
                  </figure>
                  <h3 className='project-name'> {item.title}</h3>
                  <p className='discription'>{item.discription} </p>
                  <div className='tag-box'>
                    {item.tags.map((tag) => {
                      return <p> {tag.toUpperCase()}</p>;
                    })}
                  </div>
                  <div className='repolink-box'>
                    <abbr title='Go To Repository'>
                      {' '}
                      <a href={`${item.repolink}`} target='blank'>
                        <VscGithub />
                      </a>
                    </abbr>
                    <abbr title='Go To Live Demo'>
                      <a href={`${item.livelink}`} target='blank'>
                        {item.tags.includes('css') ? <FaEye /> : ''}{' '}
                      </a>
                    </abbr>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <TbChevronsLeft
          className='left sm-left mn-left '
          onClick={handleLeft}
        />
        <TbChevronsRight
          className='right  sm-right mn-right'
          onClick={handleRight}
        />
      </section>
    </>
  );
}

export default Projects;
