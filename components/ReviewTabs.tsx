import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


type Review = {
    name: string;
    score: number;
  };

  type ReviewTabsProps = {
    reviews: Review[];
    selectedReviews: Review[];
    toggleReview: (review: Review) => void;
    maxSelectable: number;
  };

export default function ReviewTabs({reviews,selectedReviews,toggleReview,maxSelectable}:ReviewTabsProps) {
    return (
        <View style={styles.tabsContainer}>
          {reviews.map((review) => {
            const isSelected = selectedReviews.some((r) => r.name === review.name);
            return (
              <TouchableOpacity
                key={review.name}
                style={[
                  styles.tab,
                  isSelected && styles.selectedTab,
                  isSelected && selectedReviews.length > maxSelectable
                    ? styles.disabledTab
                    : {},
                ]}
                onPress={() => toggleReview(review)}
                disabled={isSelected && selectedReviews.length > maxSelectable}
              >
                <Text style={styles.tabText}>{review.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}

const styles = StyleSheet.create({
    tabsContainer: { 
      flexDirection:"row",
      flexWrap:'wrap'
      
    },
    tab: 
    {
      backgroundColor: "#848484",
      padding: 10,
      borderRadius: 10,
      margin: 5,
    },

    selectedTab: { 
        backgroundColor: "#8797DA" 
    },
    disabledTab: { 
        opacity: 0.6 
    },
    tabText: { 
        color: "white" 
    },
  });