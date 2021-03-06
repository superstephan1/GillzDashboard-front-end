import React, {useEffect} from 'react';
import '../App.scss';
import '../page_styles/style_members.scss';
import Members from '../components/comp_members';
import Notes from '../components/comp_notes';
import DialogNotes from '../components/comp_dialog_notes';
import DialogMembers from '../components/comp_dialog_members';
import Dialog_member_edit from '../components/comp_dialog_members_edit';
import Header from '../components/comp_header';

const PageMembers = (props)  => {
    useEffect(() => {
        document.title = 'Gillz Dashboard | Members';
    }, []);

    function openForm() {
        const modal = (document.getElementById('membersModal')!);
        modal.classList.add('visibleAnim');
        const modalBackground = (document.getElementById('modalBackground')!);
        modalBackground.classList.add('visible');
    }
    return (
        <div>
            <Header title={'Members'}/>
            <div className={'content'}>
                <div className={'content-container'}>
                    <div className={'members-container__row'}>
                        {/*<h3 className={'members-container__row--title'}>Members</h3>*/}
                        <div className={'members-container__row--add'}>
                            <img id={'add'} src={(require('../img/add.svg'))} alt={'add'} onClick={openForm}/>
                        </div>
                    </div>
                    <Members apiLink={process.env.REACT_APP_API_MEMBERS}/>
                </div>
            </div>
        </div>
        );
    };

export default PageMembers;