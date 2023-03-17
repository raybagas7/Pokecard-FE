import SocialContainer from '../components/Social Components/Social Random User Components/SocialContainer';
import SocialUserContainer from '../components/Social Components/Social User Detail Component/SocialUserContainer';
import useQuery from '../hooks/useQuery';

const SocialPage = () => {
  let query = useQuery();
  const searched = query.get('search_id');

  // console.log(searched, selfSearchId.toString());
  // const navigate = useNavigate();
  // if (searched === selfSearchId.toString()) {
  //   navigate('/profile');
  // }

  return searched ? (
    <SocialUserContainer searchId={searched} />
  ) : (
    <SocialContainer />
  );
};

export default SocialPage;
