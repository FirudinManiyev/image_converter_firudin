import ReactCompareImage from "react-compare-image";

interface Props {
    leftImage: string;
    rightImage: string;
}

export default function CompareSlider({
    leftImage,
    rightImage,
}: Props) {
    return (
        <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <ReactCompareImage
                leftImage={leftImage}
                rightImage={rightImage}
                sliderLineColor="#facc15"
            />
        </div>
    );
}