import {Main} from '../layouts/index';
import {connect} from 'react-redux';
import Lange from '../components/utils/language';
function services(props) {
    const {lange} = props;
    const [langeArr] = Lange(lange);

    function addSvg(id){
        switch(id){
            case 1: 
                return (
                    <svg width="143" height="119" viewBox="0 0 143 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2 12.8008H14.4C13.6839 12.8008 12.9971 13.0852 12.4908 13.5916C11.9844 14.0979 11.7 14.7847 11.7 15.5008C11.7 16.2169 11.9844 16.9036 12.4908 17.41C12.9971 17.9163 13.6839 18.2008 14.4 18.2008H25.2C25.9161 18.2008 26.6028 17.9163 27.1092 17.41C27.6155 16.9036 27.9 16.2169 27.9 15.5008C27.9 14.7847 27.6155 14.0979 27.1092 13.5916C26.6028 13.0852 25.9161 12.8008 25.2 12.8008Z" fill="#262626"/>
                        <path d="M50.4 12.8008H39.6C38.8839 12.8008 38.1972 13.0852 37.6908 13.5916C37.1845 14.0979 36.9 14.7847 36.9 15.5008C36.9 16.2169 37.1845 16.9036 37.6908 17.41C38.1972 17.9163 38.8839 18.2008 39.6 18.2008H50.4C51.1161 18.2008 51.8028 17.9163 52.3092 17.41C52.8155 16.9036 53.1 16.2169 53.1 15.5008C53.1 14.7847 52.8155 14.0979 52.3092 13.5916C51.8028 13.0852 51.1161 12.8008 50.4 12.8008Z" fill="#262626"/>
                        <path d="M133.992 23.5992H129.6V9.30722C129.595 6.89309 128.634 4.5792 126.927 2.87214C125.22 1.16509 122.906 0.203976 120.492 0.199219H9.108C6.69387 0.203976 4.37998 1.16509 2.67293 2.87214C0.965874 4.5792 0.00475692 6.89309 0 9.30722V81.0912C0.00475692 83.5053 0.965874 85.8192 2.67293 87.5263C4.37998 89.2333 6.69387 90.1945 9.108 90.1992H16.2V110.791C16.2048 112.967 17.071 115.052 18.6093 116.59C20.1476 118.128 22.2326 118.994 24.408 118.999H49.392C51.5674 118.994 53.6524 118.128 55.1907 116.59C56.7289 115.052 57.5952 112.967 57.6 110.791V90.1992H70.2V110.791C70.2048 112.967 71.0711 115.052 72.6093 116.59C74.1476 118.128 76.2326 118.994 78.408 118.999H133.992C136.167 118.994 138.252 118.128 139.791 116.59C141.329 115.052 142.195 112.967 142.2 110.791V31.8072C142.195 29.6318 141.329 27.5468 139.791 26.0085C138.252 24.4703 136.167 23.604 133.992 23.5992ZM49.392 113.599H24.408C23.6647 113.595 22.9532 113.297 22.4277 112.772C21.9021 112.246 21.6047 111.535 21.6 110.791V57.0072C21.6047 56.264 21.9021 55.5525 22.4277 55.0269C22.9532 54.5013 23.6647 54.2039 24.408 54.1992H49.392C50.1353 54.2039 50.8468 54.5013 51.3723 55.0269C51.8979 55.5525 52.1953 56.264 52.2 57.0072V87.4812V110.791C52.1953 111.535 51.8979 112.246 51.3723 112.772C50.8468 113.297 50.1353 113.595 49.392 113.599ZM57.6 84.7992V57.0072C57.5952 54.8318 56.7289 52.7468 55.1907 51.2085C53.6524 49.6703 51.5674 48.804 49.392 48.7992H24.408C22.2326 48.804 20.1476 49.6703 18.6093 51.2085C17.071 52.7468 16.2048 54.8318 16.2 57.0072V84.7992H9.108C8.12458 84.7992 7.18143 84.4086 6.48605 83.7132C5.79066 83.0178 5.4 82.0746 5.4 81.0912V9.30722C5.4 8.3238 5.79066 7.38065 6.48605 6.68527C7.18143 5.98988 8.12458 5.59922 9.108 5.59922H120.492C121.475 5.59922 122.419 5.98988 123.114 6.68527C123.809 7.38065 124.2 8.3238 124.2 9.30722V23.5992H78.408C76.2326 23.604 74.1476 24.4703 72.6093 26.0085C71.0711 27.5468 70.2048 29.6318 70.2 31.8072V84.7992H57.6ZM136.8 110.791C136.795 111.535 136.498 112.246 135.972 112.772C135.447 113.297 134.735 113.595 133.992 113.599H78.408C77.6647 113.595 76.9532 113.297 76.4277 112.772C75.9021 112.246 75.6047 111.535 75.6 110.791V31.8072C75.6047 31.0639 75.9021 30.3525 76.4277 29.8269C76.9532 29.3013 77.6647 29.0039 78.408 28.9992H133.992C134.735 29.0039 135.447 29.3013 135.972 29.8269C136.498 30.3525 136.795 31.0639 136.8 31.8072V110.791Z" fill="#262626"/>
                        <path d="M106.211 107.303C108.696 107.294 110.704 105.272 110.695 102.787C110.687 100.302 108.665 98.294 106.18 98.3027C103.694 98.3113 101.687 100.333 101.695 102.818C101.704 105.304 103.726 107.311 106.211 107.303Z" fill="#262626"/>
                    </svg>

                );
            case 2: 
                return (
                    <svg width="137" height="129" viewBox="0 0 137 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M124.614 0.599609H12.186C5.508 0.599609 0.162 4.97361 0 10.6436V92.9756C0 98.6096 5.4 103.2 12.186 103.2H64.8V123H33.3C32.5839 123 31.8972 123.284 31.3908 123.79C30.8845 124.297 30.6 124.984 30.6 125.7C30.6 126.416 30.8845 127.102 31.3908 127.609C31.8972 128.115 32.5839 128.4 33.3 128.4H103.5C104.216 128.4 104.903 128.115 105.409 127.609C105.916 127.102 106.2 126.416 106.2 125.7C106.2 124.984 105.916 124.297 105.409 123.79C104.903 123.284 104.216 123 103.5 123H70.2V103.2H124.614C131.4 103.2 136.8 98.6096 136.8 92.9756V10.8236C136.8 5.18961 131.4 0.599609 124.614 0.599609ZM131.4 92.9756C131.4 95.5856 128.286 97.7996 124.614 97.7996H12.186C8.586 97.7996 5.4 95.5856 5.4 92.9756V10.7156C5.4 8.12361 8.514 5.99961 12.186 5.99961H124.614C128.214 5.99961 131.4 8.21361 131.4 10.8236V92.9756Z" fill="#262626"/>
                        <path d="M77.886 35.9341C77.2524 35.6182 76.52 35.5638 75.8466 35.7826C75.1733 36.0014 74.6128 36.476 74.286 37.1041L59.742 65.4001C59.5801 65.7157 59.4819 66.0601 59.4531 66.4136C59.4243 66.7671 59.4653 67.1228 59.574 67.4604C59.6826 67.7981 59.8567 68.111 60.0863 68.3814C60.3159 68.6517 60.5965 68.8742 60.912 69.0361C61.2276 69.198 61.572 69.2962 61.9255 69.3251C62.279 69.3539 62.6347 69.3128 62.9723 69.2042C63.31 69.0955 63.6229 68.9214 63.8933 68.6919C64.1636 68.4623 64.3861 68.1817 64.548 67.8661L79.056 39.5161C79.3664 38.8844 79.4178 38.1564 79.1992 37.4873C78.9807 36.8182 78.5095 36.2609 77.886 35.9341Z" fill="#262626"/>
                        <path d="M95.148 34.9434C94.6362 34.4665 93.9592 34.2068 93.2597 34.2192C92.5602 34.2315 91.8929 34.5149 91.3982 35.0096C90.9035 35.5042 90.6201 36.1716 90.6078 36.8711C90.5954 37.5706 90.8551 38.2476 91.332 38.7594L104.796 52.2054L91.332 65.6514C91.0667 65.8986 90.854 66.1967 90.7064 66.5279C90.5588 66.8591 90.4795 67.2166 90.4731 67.5791C90.4667 67.9417 90.5334 68.3018 90.6692 68.638C90.805 68.9742 91.0071 69.2796 91.2635 69.5359C91.5199 69.7923 91.8253 69.9945 92.1615 70.1302C92.4977 70.266 92.8578 70.3327 93.2203 70.3263C93.5828 70.3199 93.9403 70.2406 94.2715 70.093C94.6027 69.9454 94.9008 69.7327 95.148 69.4674L110.52 54.1134C111.026 53.6071 111.31 52.9209 111.31 52.2054C111.31 51.4899 111.026 50.8037 110.52 50.2974L95.148 34.9434Z" fill="#262626"/>
                        <path d="M47.52 34.9439C47.0138 34.4383 46.3275 34.1543 45.612 34.1543C44.8965 34.1543 44.2103 34.4383 43.704 34.9439L28.332 50.3159C27.8264 50.8222 27.5424 51.5084 27.5424 52.2239C27.5424 52.9394 27.8264 53.6257 28.332 54.1319L43.704 69.5039C44.2159 69.9809 44.8928 70.2405 45.5923 70.2282C46.2918 70.2158 46.9592 69.9324 47.4539 69.4378C47.9486 68.9431 48.2319 68.2757 48.2443 67.5762C48.2566 66.8767 47.997 66.1998 47.52 65.6879L34.056 52.2419L47.52 38.7599C48.0257 38.2537 48.3097 37.5674 48.3097 36.8519C48.3097 36.1364 48.0257 35.4502 47.52 34.9439Z" fill="#262626"/>
                    </svg>
                );
            case 3:
                return (
                    <svg width="137" height="114" viewBox="0 0 137 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M136.8 31.8008V10.2008C136.795 7.5766 135.751 5.06126 133.895 3.20568C132.04 1.3501 129.524 0.30554 126.9 0.300781H9.9C7.27582 0.30554 4.76048 1.3501 2.9049 3.20568C1.04932 5.06126 0.00475827 7.5766 0 10.2008V31.8008C0.00131829 33.1514 0.279986 34.4873 0.818736 35.7258C1.35748 36.9643 2.14484 38.079 3.132 39.0008C2.14484 39.9225 1.35748 41.0372 0.818736 42.2757C0.279986 43.5142 0.00131829 44.8502 0 46.2008V67.8008C0.00131829 69.1514 0.279986 70.4873 0.818736 71.7258C1.35748 72.9643 2.14484 74.079 3.132 75.0008C2.14484 75.9225 1.35748 77.0372 0.818736 78.2757C0.279986 79.5142 0.00131829 80.8502 0 82.2008V103.801C0.00475827 106.425 1.04932 108.94 2.9049 110.796C4.76048 112.651 7.27582 113.696 9.9 113.701H126.9C129.524 113.696 132.04 112.651 133.895 110.796C135.751 108.94 136.795 106.425 136.8 103.801V82.2008C136.799 80.8502 136.52 79.5142 135.981 78.2757C135.443 77.0372 134.655 75.9225 133.668 75.0008C134.655 74.079 135.443 72.9643 135.981 71.7258C136.52 70.4873 136.799 69.1514 136.8 67.8008V46.2008C136.799 44.8502 136.52 43.5142 135.981 42.2757C135.443 41.0372 134.655 39.9225 133.668 39.0008C134.655 38.079 135.443 36.9643 135.981 35.7258C136.52 34.4873 136.799 33.1514 136.8 31.8008ZM131.4 82.2008V103.801C131.4 104.994 130.926 106.139 130.082 106.983C129.238 107.827 128.093 108.301 126.9 108.301H9.9C8.70653 108.301 7.56193 107.827 6.71802 106.983C5.87411 106.139 5.4 104.994 5.4 103.801V82.2008C5.4 81.0073 5.87411 79.8627 6.71802 79.0188C7.56193 78.1749 8.70653 77.7008 9.9 77.7008H126.9C128.093 77.7008 129.238 78.1749 130.082 79.0188C130.926 79.8627 131.4 81.0073 131.4 82.2008ZM131.4 46.2008V67.8008C131.4 68.9943 130.926 70.1388 130.082 70.9828C129.238 71.8267 128.093 72.3008 126.9 72.3008H9.9C8.70653 72.3008 7.56193 71.8267 6.71802 70.9828C5.87411 70.1388 5.4 68.9943 5.4 67.8008V46.2008C5.4 45.0073 5.87411 43.8627 6.71802 43.0188C7.56193 42.1749 8.70653 41.7008 9.9 41.7008H126.9C128.093 41.7008 129.238 42.1749 130.082 43.0188C130.926 43.8627 131.4 45.0073 131.4 46.2008ZM9.9 36.3008C8.70653 36.3008 7.56193 35.8267 6.71802 34.9828C5.87411 34.1389 5.4 32.9943 5.4 31.8008V10.2008C5.4 9.00731 5.87411 7.86271 6.71802 7.0188C7.56193 6.17489 8.70653 5.70078 9.9 5.70078H126.9C128.093 5.70078 129.238 6.17489 130.082 7.0188C130.926 7.86271 131.4 9.00731 131.4 10.2008V31.8008C131.4 32.9943 130.926 34.1389 130.082 34.9828C129.238 35.8267 128.093 36.3008 126.9 36.3008H9.9Z" fill="#262626"/>
                        <path d="M22.5 26.3996C25.4823 26.3996 27.9 23.9819 27.9 20.9996C27.9 18.0173 25.4823 15.5996 22.5 15.5996C19.5176 15.5996 17.1 18.0173 17.1 20.9996C17.1 23.9819 19.5176 26.3996 22.5 26.3996Z" fill="#262626"/>
                        <path d="M22.5 62.3996C25.4823 62.3996 27.9 59.9819 27.9 56.9996C27.9 54.0173 25.4823 51.5996 22.5 51.5996C19.5176 51.5996 17.1 54.0173 17.1 56.9996C17.1 59.9819 19.5176 62.3996 22.5 62.3996Z" fill="#262626"/>
                        <path d="M22.5 98.3996C25.4823 98.3996 27.9 95.9819 27.9 92.9996C27.9 90.0173 25.4823 87.5996 22.5 87.5996C19.5176 87.5996 17.1 90.0173 17.1 92.9996C17.1 95.9819 19.5176 98.3996 22.5 98.3996Z" fill="#262626"/>
                        <path d="M119.7 18.3008H83.7C82.9839 18.3008 82.2972 18.5852 81.7908 19.0916C81.2845 19.5979 81 20.2847 81 21.0008C81 21.7169 81.2845 22.4036 81.7908 22.91C82.2972 23.4163 82.9839 23.7008 83.7 23.7008H119.7C120.416 23.7008 121.103 23.4163 121.609 22.91C122.116 22.4036 122.4 21.7169 122.4 21.0008C122.4 20.2847 122.116 19.5979 121.609 19.0916C121.103 18.5852 120.416 18.3008 119.7 18.3008Z" fill="#262626"/>
                        <path d="M83.7 59.7008H119.7C120.416 59.7008 121.103 59.4163 121.609 58.91C122.116 58.4036 122.4 57.7169 122.4 57.0008C122.4 56.2847 122.116 55.5979 121.609 55.0916C121.103 54.5852 120.416 54.3008 119.7 54.3008H83.7C82.9839 54.3008 82.2972 54.5852 81.7908 55.0916C81.2845 55.5979 81 56.2847 81 57.0008C81 57.7169 81.2845 58.4036 81.7908 58.91C82.2972 59.4163 82.9839 59.7008 83.7 59.7008Z" fill="#262626"/>
                        <path d="M83.7 95.7008H119.7C120.416 95.7008 121.103 95.4163 121.609 94.91C122.116 94.4036 122.4 93.7169 122.4 93.0008C122.4 92.2847 122.116 91.5979 121.609 91.0916C121.103 90.5852 120.416 90.3008 119.7 90.3008H83.7C82.9839 90.3008 82.2972 90.5852 81.7908 91.0916C81.2845 91.5979 81 92.2847 81 93.0008C81 93.7169 81.2845 94.4036 81.7908 94.91C82.2972 95.4163 82.9839 95.7008 83.7 95.7008Z" fill="#262626"/>
                    </svg>
                );
            default: return null;
        }
    }
    function addAnimateClass(id){
        switch(id){
            case 1: return 'animate__fadeInLeft';
            case 2: return 'animate__fadeInUpBig';
            case 3: return 'animate__fadeInRight';
            default: return null;
        }
    }
    return <Main content={()=>(
        <>
            <div className="container" id="services">
                <div className="row" style={{overflow: 'hidden'}}>
                    <h2 className="col-12  my-4">{langeArr.servicesH2}</h2>
                    {
                        langeArr.services.map(item => {
                            
                            return (
                                <div key={item.id} className={`col-lg-4 col-md-6 col-12 mt-4 animate__animated wow ${addAnimateClass(item.id)}`}>
                                    <div>
                                        <div className="service-image justify-content-start">
                                            {
                                                addSvg(item.id)
                                            }
                                        </div>
                                        <ul className="services-lists mt-sm-5 mt-4 ">
                                            {
                                                item.lists.map((list, inx) => <li key={inx}>{list}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )}/>
}
const mapStateToProps = state => {
    const {lange} = state.mainReducer;
    return{
        lange,
    }
}
export default connect(mapStateToProps)(services);