import { type AppType } from "next/app";

import { api } from "~/utils/api";

//tailwind
import "~/styles/globals.css";

//imports for fontawesome icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Layout from "~/components/Layout";
import { LanguageProvider } from "~/context/LanguageContext";
import { UserProvider } from "~/context/UserContext";

library.add(fas);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </UserProvider>
  );
};

export default api.withTRPC(MyApp);
