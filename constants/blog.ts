import { Blog } from '@blog/models';

export const blogItems: Blog[] = [
  {
    id: '1',
    url: 'albums-2010-2020',
    title: 'My top albums in 2010-2020 🎧',
    subTitle: 'My favorite albums in the past 10 years',
    tags: ['music', 'recommendations'],
    // lazy implementation of content for now dont judge
    content: `
      <div>
        <h3>My favorite albums in the past 10 years</h3>
        <br />
        <p>- A Moon Shaped Pool, Radiohead 2016</p>
        <p>- Lonerism, Tame Imapala 2012</p>
        <p>- Tranquility Base Hotel & Casino, Arctic Monkeys 2018</p>
        <p>- Random Access Memories, Daft Punk 2013</p>
        <p>- AM, Arctic Monkeys 2013</p>
      </div>
    `
  }
];
