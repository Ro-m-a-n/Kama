import medicine from "../assets/images/news/medicine.png";
import environment from "../assets/images/news/environment.jpeg";
import economy from "../assets/images/news/economy.jpg";
import tech from "../assets/images/news/tech.jpg";
import news from "../assets/images/news/news.png";

const LIKE_THIS_NEWS = "LIKE_THIS_NEWS";
const UNLIKE_THIS_NEWS = "UNLIKE_THIS_NEWS";

type initialStateType = typeof initialState;
type newsType = {
  id: 1;
  resource: string;
  resourceAvatar: object;
  image: object;
  text: string;
  likes: number;
};
let initialState = {
  news: [
    {
      id: 1,
      resource: "News GRP",
      resourceAvatar: news,
      image: medicine,
      text: "Breakthrough in medical research: A team of researchers has made a significant discovery in the field of medical science, paving the way for new treatments and therapies for a range of diseases. The study, which involved years of dedicated research and collaboration across multiple disciplines, has the potential to revolutionize the field and improve the lives of millions of people around the world. Scientists are now working to build on these findings and continue pushing the boundaries of what we know about the human body and its complex systems.",
      likes: 7,
    },
    {
      id: 2,
      resource: "News GRP",
      resourceAvatar: news,
      image: environment,
      text: "Environmental crisis: As the effects of climate change become increasingly evident, many individuals and organizations are calling for immediate action to address the environmental crisis. From reducing carbon emissions to investing in renewable energy and protecting wildlife habitats, there are a variety of approaches being taken to mitigate the impact of human activity on the planet. While progress has been made in some areas, there is still much work to be done to ensure a sustainable future for all.",
      likes: 5,
    },
    {
      id: 3,
      resource: "News GRP",
      resourceAvatar: news,
      image: economy,
      text: "Global economy sees sharp increase in job growth, with unemployment rates falling to pre-pandemic levels.",
      likes: 10,
    },
    {
      id: 4,
      resource: "News GRP",
      resourceAvatar: news,
      image: tech,
      text: "Emerging technology: From artificial intelligence and machine learning to biotechnology and quantum computing, emerging technologies are transforming the way we live and work in ways that were once unimaginable. While these developments hold immense potential for solving some of the world's most pressing challenges, they also raise complex ethical and societal questions that require careful consideration. As scientists and policymakers work to navigate this rapidly changing landscape, there is much debate and discussion around how best to harness the power of technology for the greater good.",
      likes: 20,
    },
  ] as Array<newsType>,
};
let newsReducer = (
  state: initialStateType = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case LIKE_THIS_NEWS: {
      let updatedNews = state.news.filter((key) => {
        if (key.id == action.id) {
          key.likes++;
        }
        return key;
      });

      return { ...state, news: updatedNews };
    }

    case UNLIKE_THIS_NEWS: {
      let updatedNews = state.news.filter((key) => {
        if (key.id == action.id) {
          key.likes--;
        }
        return key;
      });

      return { ...state, news: updatedNews };
    }
    default:
      return state;
  }
};

type likeThisNewsACType = {
  type: typeof LIKE_THIS_NEWS;
  id: number;
};

export const likeThisNewsAC = (id: number): likeThisNewsACType => {
  return { type: LIKE_THIS_NEWS, id };
};
type unlikeThisNewsACType = {
  type: typeof UNLIKE_THIS_NEWS;
  id: number;
};
export const unlikeThisNewsAC = (id: number): unlikeThisNewsACType => {
  return { type: UNLIKE_THIS_NEWS, id };
};
export default newsReducer;
