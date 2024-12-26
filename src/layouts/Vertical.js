import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { Container } from 'react-bootstrap';
// import { changeSidebarType } from '../redux/actions';
// import * as layoutConstants from '../constants/layout';
import { changeBodyAttribute } from "../utils";
// import LLMCustomizer from '../components/LLMCustomizer';

const LeftSidebar = React.lazy(() => import("./LeftSidebar"));
const Footer = React.lazy(() => import("./Footer"));
const RightSidebar = React.lazy(() => import("./RightSidebar"));

const loading = () => <div className=""></div>;

const VerticalLayout = ({ children }, state) => {
  const dispatch = useDispatch();

  const { layoutColor, leftSideBarTheme, leftSideBarType, layoutWidth } =
    useSelector((state) => ({
      layoutColor: state.Layout.layoutColor,
      layoutWidth: state.Layout.layoutWidth,
      leftSideBarTheme: state.Layout.leftSideBarTheme,
      leftSideBarType: state.Layout.leftSideBarType,
    }));

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  /*
   * layout defaults
   */
  useEffect(() => {
    changeBodyAttribute("data-layout", layoutConstants.LAYOUT_VERTICAL);
  }, []);

  useEffect(() => {
    changeBodyAttribute("data-layout-color", layoutColor);
  }, [layoutColor]);

  useEffect(() => {
    changeBodyAttribute("data-layout-mode", layoutWidth);
  }, [layoutWidth]);

  useEffect(() => {
    changeBodyAttribute("data-leftbar-theme", leftSideBarTheme);
  }, [leftSideBarTheme]);

  useEffect(() => {
    changeBodyAttribute("data-leftbar-compact-mode", leftSideBarType);
  }, [leftSideBarType]);

  /**
   * Open the menu when having mobile screen
   */
  const openMenu = useCallback(() => {
    setIsMenuOpened((prevState) => !prevState);

    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.remove("sidebar-enable");
      } else {
        document.body.classList.add("sidebar-enable");
      }
    }
  }, [isMenuOpened]);

  const updateDimensions = useCallback(() => {
    // activate the condensed sidebar if smaller devices like ipad or tablet
    if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
      dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
    } else if (window.innerWidth > 1028) {
      dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
    }
  }, [dispatch]);

  useEffect(() => {
    const debounceUpdateDimensions = debounce(updateDimensions, 200);
    window.addEventListener("resize", debounceUpdateDimensions);

    return () => {
      window.removeEventListener("resize", debounceUpdateDimensions);
    };
  }, [updateDimensions]);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const isCondensed = useMemo(
    () => leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED,
    [leftSideBarType],
  );
  const isLight = useMemo(
    () => leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT,
    [leftSideBarTheme],
  );

  return (
    <>
      <div className="wrapper">
        <Suspense fallback={loading()}>
          <LeftSidebar
            isCondensed={isCondensed}
            isLight={isLight}
            hideUserProfile={true}
          />
        </Suspense>
        <div className="content-page">
          <div className="content">
            <Suspense fallback={loading()}>
              {/* <Topbar openLeftMenuCallBack={openMenu} hideLogo={true} /> */}
            </Suspense>
            {/* <Container fluid>
              <Outlet />
            </Container> */}
          </div>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={loading()}>
        <RightSidebar>{/* <LLMCustomizer /> */}</RightSidebar>
      </Suspense>
    </>
  );
};
export default VerticalLayout;
