import Link from 'next/link';
import Image from 'next/image';

const Card = () => {




    return (
        <div className="card h-100 shadow">
            <Link href="http://localhost/code/nicedeals/deals/Deal-til-test-af-billeder" >
                <a>
                    <Image src="/image/fruits-g3c41f7655_1920.jpg" width={1920} height={1280} className="card-img-top" alt="..." />
                </a>
            </Link>
            <div className="card-body pb-0">
                <Link href="http://localhost/code/nicedeals/deals/Deal-til-test-af-billeder" >
                    <a className="text-decoration-none">
                        <h3 className="font-weight-bold card-title text-black fs-5">Deal til test af billeder</h3>
                    </a>
                </Link>
                <p className="card-text">Dette er en teaser</p>
            </div>
            <div className="card-footer bg-white border-top-0 d-flex justify-content-between align-items-end">
                <p className="mb-0 font-weight-bold card-text font-size-three"><span className="font-size-six mr-1">Kun</span> 299,-</p>
                <p className="mb-0 card-text">
                    <small>0 solgt</small>
                </p>
            </div>
        </div>
    )
}

export default Card;