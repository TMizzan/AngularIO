export interface News {
    author: string;
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    category: string;
    language: string;
    county: string;
    published_at: string;
};

export const news = [];

type GetNewsResponse = {
  data: News[];
};

async function getNews() {
  const { data, status } = await axios.get<GetNewsResponse>(
    'http://api.mediastack.com/v1/news?access_key=4caa229187acbf4381edb01f4c816271&countries=us&sort=published_desc&categories=technology&date=2022-12-05',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  console.log(JSON.stringify(data, null, 4));

  // 👇️ "response status is: 200"
  console.log('response status is: ', status);

  return data;
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log('error message: ', error.message);
    return error.message;
  } else {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}