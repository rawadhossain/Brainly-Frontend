import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Sidebar />
            <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
                <CreateContentModal
                    open={modalOpen}
                    onClose={() => {
                        setModalOpen(false);
                    }}
                />

                <div className="flex justify-end gap-4">
                    <Button
                        onClick={() => setModalOpen(true)}
                        variant="primary"
                        text="Add Content"
                        startIcon={<PlusIcon />}
                    ></Button>
                    <Button
                        variant="secondary"
                        text="Share Brain"
                        startIcon={<ShareIcon />}
                    ></Button>
                </div>
                <div className="flex gap-4">
                    <Card
                        type="twitter"
                        title="Game Post"
                        link="https://x.com/RawadHossain/status/1826685122579759477"
                    />

                    <Card
                        type="youtube"
                        title="Veritasium"
                        link="https://www.youtube.com/embed/zTDFhWWPZ4Q?si=8EOq9vMCYd9MpBlE"
                    />
                </div>
            </div>
        </>
    );
}
