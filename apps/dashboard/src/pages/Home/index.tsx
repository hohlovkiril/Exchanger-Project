import { useLayoutEffect } from "react";
import { useLayoutApi } from "../../providers/layout.provider"
import { DemoPagePlaceholder } from '../../components/widgets'

export default function HomePage() {

  /** Context */

  const { setPageTitleStatus, setBreadcrumbsStatus } = useLayoutApi();

  /** Effects */

  useLayoutEffect(() => {
    setPageTitleStatus(false);
    setBreadcrumbsStatus(false);

    return () => {
      setPageTitleStatus(true);
      setBreadcrumbsStatus(true);
    }
  }, [
    setPageTitleStatus,
    setBreadcrumbsStatus,
  ])

  return (
    <>
      <DemoPagePlaceholder />
    </>
  )
}