import { FC, FunctionComponent } from "react";
import LastOrders from "./LastOrders/LastOrders";
import TopFoods from "./TopFoods/TopFoods";
import LastFeeds from "./LastFeeds/LastFeeds";
import TopCustomers from "./TopCustomers/TopCustomers";
import "./MonPages.scss";

const MonPages: FC<{ pages: string | null }> = ({ pages }) => {
  let RenderPage: FunctionComponent | null = null;
  switch (pages) {
    case "Last Orders":
      RenderPage = LastOrders;
      break;
    case "Top Customers":
      RenderPage = TopCustomers;
      break;
    case "Popular Foods":
      RenderPage = TopFoods;
      break;
    case "Last Feeds":
      RenderPage = LastFeeds;
      break;
    default:
      RenderPage = null;
  }
  return (
    <div className="mon-pages-wrappers">
      {RenderPage ? <RenderPage /> : <p>Page not found</p>}
    </div>
  );
};

export default MonPages;
