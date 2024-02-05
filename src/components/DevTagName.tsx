const DevTagName = ({ name, year }: { name: string; year: number }) => {
    return (
        <div className="flex text-[48px] gap-5">
            <p className="font-semibold">{year},</p>
            <p className="font-medium">{name}</p>
        </div>
    );
};

export default DevTagName;
