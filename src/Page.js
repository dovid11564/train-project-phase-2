
import Map from "./Map"


function Page({ stations }) {
    return (
        <>
            <div class="flex-container">
                <Map stations={stations} />
            </div>
        </>
    )
}

export default Page