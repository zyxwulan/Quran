import { useState } from "react";
import Juz from "../atoms/ListNumbers/numbers";
import SurahCards from "../molecules/surahCards";

function Content() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container mt-1 content-box">
            <div className="mx-auto bloc-tabs">
                {/* Surah Tab */}
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Show Surah
                </button>

                {/* Juz Tab */}
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Show Juz
                </button>
            </div>

            <div className="container content-tabs">
                {/* Show Surah */}
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div className="px-1 py-3 row">
                        <SurahCards number="1" title="Al-Fatihah" meaning="The Opener" arabic="الفاتحة" link="" />
                        <SurahCards number="2" title="" meaning="" arabic="" link="" />
                        <SurahCards number="3" title="" meaning="" arabic="" link="" />
                        <SurahCards number="4" title="" meaning="" arabic="" link="" />
                        <SurahCards number="5" title="" meaning="" arabic="" link="" />
                        <SurahCards number="6" title="" meaning="" arabic="" link="" />
                        <SurahCards number="7" title="" meaning="" arabic="" link="" />
                        <SurahCards number="8" title="" meaning="" arabic="" link="" />
                        <SurahCards number="9" title="" meaning="" arabic="" link="" />
                        <SurahCards number="10" title="" meaning="" arabic="" link="" />
                        <SurahCards number="11" title="" meaning="" arabic="" link="" />
                        <SurahCards number="12" title="" meaning="" arabic="" link="" />
                        <SurahCards number="13" title="" meaning="" arabic="" link="" />
                        <SurahCards number="14" title="" meaning="" arabic="" link="" />
                        <SurahCards number="15" title="" meaning="" arabic="" link="" />
                        <SurahCards number="16" title="" meaning="" arabic="" link="" />
                        <SurahCards number="17" title="" meaning="" arabic="" link="" />
                        <SurahCards number="18" title="" meaning="" arabic="" link="" />
                        <SurahCards number="19" title="" meaning="" arabic="" link="" />
                        <SurahCards number="20" title="" meaning="" arabic="" link="" />
                        <SurahCards number="21" title="" meaning="" arabic="" link="" />
                        <SurahCards number="22" title="" meaning="" arabic="" link="" />
                        <SurahCards number="23" title="" meaning="" arabic="" link="" />
                        <SurahCards number="24" title="" meaning="" arabic="" link="" />
                        <SurahCards number="25" title="" meaning="" arabic="" link="" />
                        <SurahCards number="26" title="" meaning="" arabic="" link="" />
                        <SurahCards number="27" title="" meaning="" arabic="" link="" />
                        <SurahCards number="28" title="" meaning="" arabic="" link="" />
                        <SurahCards number="29" title="" meaning="" arabic="" link="" />
                        <SurahCards number="30" title="" meaning="" arabic="" link="" />
                        <SurahCards number="31" title="" meaning="" arabic="" link="" />
                        <SurahCards number="32" title="" meaning="" arabic="" link="" />
                        <SurahCards number="33" title="" meaning="" arabic="" link="" />
                        <SurahCards number="34" title="" meaning="" arabic="" link="" />
                        <SurahCards number="35" title="" meaning="" arabic="" link="" />
                        <SurahCards number="36" title="" meaning="" arabic="" link="" />
                        <SurahCards number="37" title="" meaning="" arabic="" link="" />
                        <SurahCards number="38" title="" meaning="" arabic="" link="" />
                        <SurahCards number="39" title="" meaning="" arabic="" link="" />
                        <SurahCards number="40" title="" meaning="" arabic="" link="" />
                        <SurahCards number="41" title="" meaning="" arabic="" link="" />
                        <SurahCards number="42" title="" meaning="" arabic="" link="" />
                        <SurahCards number="43" title="" meaning="" arabic="" link="" />
                        <SurahCards number="44" title="" meaning="" arabic="" link="" />
                        <SurahCards number="45" title="" meaning="" arabic="" link="" />
                        <SurahCards number="46" title="" meaning="" arabic="" link="" />
                        <SurahCards number="47" title="" meaning="" arabic="" link="" />
                        <SurahCards number="48" title="" meaning="" arabic="" link="" />
                        <SurahCards number="49" title="" meaning="" arabic="" link="" />
                        <SurahCards number="50" title="" meaning="" arabic="" link="" />
                        <SurahCards number="51" title="" meaning="" arabic="" link="" />
                        <SurahCards number="52" title="" meaning="" arabic="" link="" />
                        <SurahCards number="53" title="" meaning="" arabic="" link="" />
                        <SurahCards number="54" title="" meaning="" arabic="" link="" />
                        <SurahCards number="55" title="" meaning="" arabic="" link="" />
                        <SurahCards number="56" title="" meaning="" arabic="" link="" />
                        <SurahCards number="57" title="" meaning="" arabic="" link="" />
                        <SurahCards number="58" title="" meaning="" arabic="" link="" />
                        <SurahCards number="59" title="" meaning="" arabic="" link="" />
                        <SurahCards number="60" title="" meaning="" arabic="" link="" />
                        <SurahCards number="61" title="" meaning="" arabic="" link="" />
                        <SurahCards number="62" title="" meaning="" arabic="" link="" />
                        <SurahCards number="63" title="" meaning="" arabic="" link="" />
                        <SurahCards number="64" title="" meaning="" arabic="" link="" />
                        <SurahCards number="65" title="" meaning="" arabic="" link="" />
                        <SurahCards number="66" title="" meaning="" arabic="" link="" />
                        <SurahCards number="67" title="" meaning="" arabic="" link="" />
                        <SurahCards number="68" title="" meaning="" arabic="" link="" />
                        <SurahCards number="69" title="" meaning="" arabic="" link="" />
                        <SurahCards number="70" title="" meaning="" arabic="" link="" />
                        <SurahCards number="71" title="" meaning="" arabic="" link="" />
                        <SurahCards number="72" title="" meaning="" arabic="" link="" />
                        <SurahCards number="73" title="" meaning="" arabic="" link="" />
                        <SurahCards number="74" title="" meaning="" arabic="" link="" />
                        <SurahCards number="75" title="" meaning="" arabic="" link="" />
                        <SurahCards number="76" title="" meaning="" arabic="" link="" />
                        <SurahCards number="77" title="" meaning="" arabic="" link="" />
                        <SurahCards number="78" title="" meaning="" arabic="" link="" />
                        <SurahCards number="79" title="" meaning="" arabic="" link="" />
                        <SurahCards number="80" title="" meaning="" arabic="" link="" />
                        <SurahCards number="81" title="" meaning="" arabic="" link="" />
                        <SurahCards number="82" title="" meaning="" arabic="" link="" />
                        <SurahCards number="83" title="" meaning="" arabic="" link="" />
                        <SurahCards number="84" title="" meaning="" arabic="" link="" />
                        <SurahCards number="85" title="" meaning="" arabic="" link="" />
                        <SurahCards number="86" title="" meaning="" arabic="" link="" />
                        <SurahCards number="87" title="" meaning="" arabic="" link="" />
                        <SurahCards number="88" title="" meaning="" arabic="" link="" />
                        <SurahCards number="89" title="" meaning="" arabic="" link="" />
                        <SurahCards number="90" title="" meaning="" arabic="" link="" />
                        <SurahCards number="91" title="" meaning="" arabic="" link="" />
                        <SurahCards number="92" title="" meaning="" arabic="" link="" />
                        <SurahCards number="93" title="" meaning="" arabic="" link="" />
                        <SurahCards number="94" title="" meaning="" arabic="" link="" />
                        <SurahCards number="95" title="" meaning="" arabic="" link="" />
                        <SurahCards number="96" title="" meaning="" arabic="" link="" />
                        <SurahCards number="97" title="" meaning="" arabic="" link="" />
                        <SurahCards number="98" title="" meaning="" arabic="" link="" />
                        <SurahCards number="99" title="" meaning="" arabic="" link="" />
                        <SurahCards number="100" title="" meaning="" arabic="" link="" />
                        <SurahCards number="101" title="" meaning="" arabic="" link="" />
                        <SurahCards number="102" title="" meaning="" arabic="" link="" />
                        <SurahCards number="103" title="" meaning="" arabic="" link="" />
                        <SurahCards number="104" title="" meaning="" arabic="" link="" />
                        <SurahCards number="105" title="" meaning="" arabic="" link="" />
                        <SurahCards number="106" title="" meaning="" arabic="" link="" />
                        <SurahCards number="107" title="" meaning="" arabic="" link="" />
                        <SurahCards number="108" title="" meaning="" arabic="" link="" />
                        <SurahCards number="109" title="" meaning="" arabic="" link="" />
                        <SurahCards number="110" title="" meaning="" arabic="" link="" />
                        <SurahCards number="111" title="" meaning="" arabic="" link="" />
                        <SurahCards number="112" title="" meaning="" arabic="" link="" />
                        <SurahCards number="113" title="" meaning="" arabic="" link="" />
                        <SurahCards number="114" title="" meaning="" arabic="" link="" />
                    </div>
                </div>

                {/* Show Juz */}
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <div className="juz-container">
                        {/* JUZ 1 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="1" />
                            <SurahCards show="juz" number="" title="Al-Fatihah" meaning="The Opener" arabic="الفاتحة" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 2 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="2" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 3 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="3" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 4 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="4" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 5 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="5" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 6 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="6" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 7 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="7" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 8 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="8" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 9 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="9" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 10 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="10" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 11 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="11" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 12 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="12" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 13 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="13" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 14 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="14" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 15 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="15" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 16 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="16" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 17 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="17" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 18 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="18" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 19 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="19" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 20 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="20" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 21 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="21" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 22 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="22" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 23 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="23" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 24 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="24" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 25 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="25" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 26 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="26" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 27 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="27" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 28 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="28" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 29 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="29" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>

                        {/* JUZ 30 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="30" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                            <SurahCards show="juz" number="" title="" meaning="" arabic="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;