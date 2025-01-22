import {useSelector} from 'react-redux'
import { lang } from '../constants/languageConstants';


const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store)=>store.language?.lang);
  return (
    
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-red-700 grid grid-cols-12 '>
            <input className="p-4 m-4 col-span-9" type='text' placeholder={lang[selectedLanguage].gptSearcPlaceHolder} />
            <button className="py-2 m-4 px-4 bg-gray-500 rounded-lg text-white col-span-3" type='submit'>{lang[selectedLanguage].search}</button>
        </form>
    </div>
  )
};

export default GPTSearchBar