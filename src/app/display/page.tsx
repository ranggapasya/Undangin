import Catalog from "@/components/displayComponents/catalog";

export default function Display() {
    return (
        <div className="flex min-h-screen flex-col justify-between">
            <Catalog />
        </div>
    );
}