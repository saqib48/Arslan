import { connectDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '@/models/contact'; // moved from @/app/models

export async function POST(req) {
  try {
    const { fullname, email, message } = await req.json();

    if (!fullname || !email || !message) {
      return NextResponse.json({
        msg: ["All fields are required."],
        success: false,
      });
    }

    await connectDB();
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({ msg: errorList, success: false });
    }

    console.error("Server Error:", error);
    return NextResponse.json({
      msg: ["Unable to send message."],
      success: false,
    });
  }
}
