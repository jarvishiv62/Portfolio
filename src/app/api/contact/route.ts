import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: Add email sending logic here
    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error sending message' },
      { status: 500 }
    );
  }
}
