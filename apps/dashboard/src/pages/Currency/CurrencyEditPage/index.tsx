import { useParams } from "react-router-dom";
import { useLayoutApi } from "../../../providers/layout.provider"
import { useLayoutEffect } from "react";

export default function CurrencyEditPage() {

  /** Context */
  
  const { id } = useParams();
  const { setPageTitle, } = useLayoutApi();

  /** Effects */

  useLayoutEffect(() => {
    setPageTitle(`Currecy Edit - ${id}`);

    return () => {
      setPageTitle('');
    }
  }, [
    id,
    setPageTitle,
    
  ])

  return (
    <>
    </>
  )
}