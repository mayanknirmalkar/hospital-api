import Report from "../models/report.js";

const getAllReports = async (req,res,next) =>{

    const {status} = req.params;

    try {
        const reports = await Report.find();

        if(reports.length === 0){
            return res.status(404).json({success:false, message:"No reports here"})
        }

        const filteredReports = reports.filter((report) => status === report.status);

        return res.status(200).json({success:true, filteredReports, message:"reports listed"})
    } catch (error) {
        next(error)
    }

   


}

export default getAllReports