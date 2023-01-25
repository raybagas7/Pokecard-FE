import React from 'react';
import { RiSearchEyeLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput';

const SocialFindById = ({ selfSearchId }) => {
  const [searchUserByFI, handlerSearchByFI] = useInput('');
  const navigate = useNavigate();

  const onSubmitId = (event) => {
    event.preventDefault();

    // console.log('asdasd', searchUserByFI, selfSearchId.toString());
    searchUserByFI === selfSearchId.toString()
      ? navigate('/profile')
      : navigate(`/social?search_id=${searchUserByFI}`);
  };
  return (
    <div className="flex w-full items-center justify-center">
      <p className="mr-1 text-2xl">#</p>
      <form onSubmit={onSubmitId} className="flex h-fit">
        <input
          value={searchUserByFI}
          onChange={handlerSearchByFI}
          type="number"
          className="none rounded-l-full p-2 pr-1 text-sm outline-none"
        />
        <button
          disabled={searchUserByFI.length < 4 ? true : false}
          className="group/search cursor-pointer rounded-r-full bg-white pr-2 disabled:cursor-default"
        >
          <Link to={`/social?search_id=${searchUserByFI}`}>
            <RiSearchEyeLine
              className={`
            ${
              searchUserByFI.length >= 4
                ? 'text-black-steam transition duration-300 group-hover/search:text-orange-poke'
                : 'cursor-default text-gray-300'
            }
            `}
            />
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SocialFindById;
