import { atom, useRecoilState } from 'recoil';

type LoadingState = {
  isLoaded: boolean;
};

const loadingStore = atom<LoadingState>({
  key: 'loadingStore',
  default: {
    isLoaded: false,
  },
});

export const useRecoilLoading = (): [boolean, (loaded: boolean) => void] => {
  const [loadingAtom, setLoadingAtom] = useRecoilState(loadingStore);
  const { isLoaded } = loadingAtom;
  const setIsLoaded = (loaded: boolean) => {
    setLoadingAtom({
      ...loadingAtom,
      isLoaded: loaded,
    });
  };

  return [isLoaded, setIsLoaded];
};
