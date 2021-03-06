import React from 'react';
import Deadlines from '../components/comp_deadlines';
import '../page_styles/style_deadlines.scss';
import '../App.scss';
import Header from '../components/comp_header';

const PageDeadlines = () => {
        function openForm() {
            const modal = (document.getElementById('deadlineModal')!);
            modal.classList.add('visibleAnim');
            const modalBackground = (document.getElementById('modalBackground')!);
            modalBackground.classList.add('visible');
        }

        return (
            <div>
                <Header title={'Deadlines'}/>
                <div className={'content'}>
                    <div className={'content-container'}>
                        <div className={'deadlines-container__row'}>
                            {/*<h3 className={'deadlines-container__row--title'}></h3>*/}
                            <div className={'deadlines-container__row--add'} onClick={openForm}>
                                <img id={'add'} src={(require('../img/add.svg'))} alt={'add'}/>
                            </div>
                        </div>
                        <Deadlines apiLink={process.env.REACT_APP_API_DEADLINES_ORDEREDBYDATE}/>
                    </div>
                </div>
            </div>
        );
    };

export default PageDeadlines;
