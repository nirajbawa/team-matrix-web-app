import { useMediaQuery } from 'react-responsive';


const useScreenSize = () : [boolean, boolean, boolean, boolean, boolean] =>{
    const sm = useMediaQuery({ minWidth: 640 });
    const md = useMediaQuery({ minWidth: 768});
    const lg = useMediaQuery({ minWidth: 1024 });
    const xl = useMediaQuery({ minWidth: 1280 });
    const xl2 = useMediaQuery({ minWidth: 1536 });

    return [sm, md, lg, xl, xl2];
}

export default useScreenSize;