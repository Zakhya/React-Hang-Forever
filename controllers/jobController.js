import { nanoid } from "nanoid";
import Job from "../models/jobModel.js";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(200).json({ job });
};

export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(200).json({ job });
};

export const editSingleJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ msg: "updated complete", job: updatedJob });
};

export const deleteSingleJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);

  res.status(200).json({ msg: "Delete Successful" });
};
