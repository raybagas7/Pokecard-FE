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
    <div className="mb-2 flex w-full flex-col items-center justify-center">
      <div
        className="rounded-tr-md rounded-tl-md
       bg-white p-2 pb-0 pt-0.5 text-xxs"
      >
        Find Directly
      </div>
      <form onSubmit={onSubmitId} className="flex h-fit">
        <p className="rounded-l-full bg-white p-1 pl-2 text-2xl">#</p>
        <input
          value={searchUserByFI}
          onChange={handlerSearchByFI}
          placeholder="Friend Id"
          type="number"
          className="none p-2 pr-1 pl-0 text-sm outline-none"
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
