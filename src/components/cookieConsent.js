import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

export const CookieConsent = () => {

    const [cookieVisible, setCookieVisible] = useState(true);

    function handleClick(e) {
        setCookieVisible(!cookieVisible);
    }

	return (
        <Fragment>
            {cookieVisible && (
                <div class="fixed w-50 mx-auto md:w-screen bottom-0 left-0 text-center bg-black p-6 text-sm text-white">
                    <p class="mb-0">Questo sito contiene dei cookies utili per il funzionamento di Google Analytics</p>
                        <button onClick={handleClick} class="bg-transparent my-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Accetta cookies
                        </button>
                </div>
            )}
        </Fragment>
	);
};