package com.jaam.transittrack;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class NavigationActivity extends AppCompatActivity {

    //ChatGPT usage: No
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_navigation);

        Button friendListButton = findViewById(R.id.friendListButton);
        friendListButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent friendsListIntent = new Intent(NavigationActivity.this, FriendListActivity.class);
                startActivity(friendsListIntent);
            }
        });

//ChatGPT usage: No
        findViewById(R.id.calendarActivityButton).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent calendarIntent = new Intent(NavigationActivity.this, CalendarActivity.class);
                startActivity(calendarIntent);
            }
        });

        //ChatGPT usage: No
        //DEBUG CODE
        // Button chatButton = findViewById(R.id.chatButton);
//        chatButton.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                Intent chatIntent = new Intent(NavigationActivity.this, ChatActivity.class);
//                chatIntent.putExtra("receiverEmail", "johndoe@example.com");
//                startActivity(chatIntent);
//
//            }
//        });
        //ChatGPT usage: No
//        Button notifyButton = findViewById(R.id.notifyButton);
//        notifyButton.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                HttpUrl url = HttpUrl.parse("https://20.200.125.197:8081/getFCM").newBuilder()
//                        .addQueryParameter("userEmail", GoogleSignIn.getLastSignedInAccount(NavigationActivity.this).getEmail())
//                        .build();
//                Request request = new Request.Builder()
//                        .url(url)
//                        .get()
//                        .build();
//                Log.d(TAG, request.toString());
//                try {
//                    new OkHttpClient().newCall(request).execute();
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//            }
//        });
//ChatGPT usage: No
        findViewById(R.id.routeActivityButton).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent routeIntent = new Intent(NavigationActivity.this, RouteActivity.class);
                startActivity(routeIntent);
            }
        });
    }
}