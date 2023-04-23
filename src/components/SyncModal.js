import { Puff } from 'react-loading-icons'

const SyncModal = ({syncing}) => {
    if (!syncing)
        return;
    return (
        <div className='sync-modal-wrapper'>
            <div className='sync-modal'>    
                    <div className='center-wrapper'>
                        <Puff stroke='#ffffff' className='puff'/>
                    </div>
            </div>
        </div>
    );
}

export default SyncModal;