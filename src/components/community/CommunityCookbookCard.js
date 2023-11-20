export const CommunityCookbookCard = () => {
  return (
    <div className="card bg-orange-50 md:flex-row md:max-w-[100%]">
      <img
        src="https://source.unsplash.com/random/300x200"
        className="rounded-t-[0.75rem] md:rounded-tr-[0] md:rounded-l-[0.75rem] md:max-w-[33%]"
        alt=""
      />
      <div className="card-body p-2">
        <h2 className="card-header justify-center">Cookbook Title Goes here</h2>
        <p className="text-stone-600">
          An amazing cookbook, truly one of the kind, come subscribe to it now
          and save yourself the trouble of searching manually.
        </p>
        <div className="divider divider-horizontal opacity-30 mx-6 my-0"></div>
        <div className="card-footer flex-col gap-2 justify-center">
          <div>Social Buttons</div>
          <button className="btn-warning btn">View Cookbook</button>
        </div>
      </div>
    </div>
  );
};
