
export default async function handler(req, res) {
    try {
        let FixCors = await import("../../../../../contract/fixCors.js");
        await FixCors.default(res);
    } catch (error) { }

    let useContract = await import("../../../../../contract/useContract.ts");
    const { contract, signerAddress } = await useContract.default();
  

    const { userid, amount } = req.body;


    await contract.WithDrawAmount(Number(userid), Number(amount), {
        from: signerAddress,
        gasPrice: 10_000_000_000
    });


    res.status(200).json({ status: 200, value: "Withdrawn" })

}
