import Link from "next/link";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme === `system` ? systemTheme : theme;

    if (currentTheme === `dark`) {
      return (
        <BsSun
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme(`light`)}
        />
      );
    } else {
      return (
        <BsMoonStarsFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme(`dark`)}
        />
      );
    }
  };

  return (
    <header className="bg-gray-500 dark:border-gray-700">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row justify-between text-center p-4">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="search" />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={`/`} className="font-bold uppercase text-3xl">
            design
          </Link>
        </div>
        <div className="flex w-96 order-3 justify-center gap-6">
          <div>
            <Link href={`/`}>
              <ImTwitter color="888888" />
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <ImFacebook color="888888" />
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <ImYoutube color="888888" />
            </Link>
          </div>
          <div>
            {renderThemeChanger()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
